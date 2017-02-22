package com.demo.app.dao;

import java.util.List;

import com.demo.app.model.Product;

public interface ProductDao {

	void saveProduct(Product product);

	List<Product> findAllProducts();

	void deleteProductByProductCode(String productCode);

	Product findByProductCode(String productCode);

	void updateProduct(Product product);

	void deleteProductByProductId(int id);
}
