package com.demo.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.app.dao.ProductDao;
import com.demo.app.model.Product;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao dao;

	public void saveProduct(Product product) {
		dao.saveProduct(product);
	}

	public List<Product> findAllProducts() {
		return dao.findAllProducts();
	}

	public void deleteProductByProductCode(String productCode) {
		dao.deleteProductByProductCode(productCode);
	}

	public void updateProduct(Product product) {
		dao.updateProduct(product);
	}

	public Product findByProductCode(String productCode) {
		return dao.findByProductCode(productCode);
	}

	public void deleteProductByProductId(int id) {
		dao.deleteProductByProductId(id);
	}

}