package com.demo.app.service;

import java.util.List;

import com.demo.app.model.Product;

public interface ProductService{

	void saveProduct(Product product);
	
	void updateProduct(Product product);
	
	void deleteProductByProductId(int id);

	List<Product> findAllProducts();

	void deleteProductByProductCode(String productCode);

	Product findByProductCode(String productCode);

}