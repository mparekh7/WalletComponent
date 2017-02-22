package com.demo.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.app.model.Product;
import com.demo.app.service.ProductService;
import com.demo.app.view.ProductViewObject;

@RestController
@RequestMapping(value = "product")
public class ProductController {

	@Autowired
	ProductService productService;

	@RequestMapping(value = "/get", method = RequestMethod.GET)
	public List<ProductViewObject> getProducts() {
		System.out.println("hey....");
		List<Product> products = new ArrayList<Product>();
		products = productService.findAllProducts();
		List<ProductViewObject> productViewObjects = new ArrayList<ProductViewObject>();
		for (Product product : products) {
			ProductViewObject productViewObject = convertModelToViewObject(product);
			productViewObjects.add(productViewObject);
		}
		// products.forEach(item -> {
		// ProductViewObject productViewObject = convertModelToViewObject(item);
		// productViewObjects.add(productViewObject);
		// });
		return productViewObjects;
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public void saveProduct(@RequestBody Product product) {
		productService.saveProduct(product);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void updateProduct(@RequestBody Product product) {
		productService.updateProduct(product);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void deleteProduct(@PathVariable int id) {
		productService.deleteProductByProductId(id);
	}

	public ProductViewObject convertModelToViewObject(Product product) {
		ProductViewObject viewObject = new ProductViewObject();
		viewObject.setName(product.getName());
		viewObject.setCode(product.getCode());
		viewObject.setPrice(product.getPrice());
		viewObject.setStatus(product.getStatus());

		return viewObject;

	}

}
