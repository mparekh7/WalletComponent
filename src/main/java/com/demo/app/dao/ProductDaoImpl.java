package com.demo.app.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.demo.app.model.Product;

@Repository("productDao")
public class ProductDaoImpl extends AbstractDao implements ProductDao {

	public void saveProduct(Product product) {
		persist(product);
	}

	@SuppressWarnings("unchecked")
	public List<Product> findAllProducts() {
		Criteria criteria = getSession().createCriteria(Product.class);
		return (List<Product>) criteria.list();
	}

	public void deleteProductByProductCode(String productCode) {
		Query query = getSession().createSQLQuery(
				"delete from Product where code = :code");
		query.setText("code", productCode);
		query.executeUpdate();
	}

	public void updateProduct(Product product) {
		getSession().update(product);
	}

	public Product findByProductCode(String productCode) {
		Criteria criteria = getSession().createCriteria(Product.class);
		criteria.add(Restrictions.eq("code", productCode));
		return (Product) criteria.uniqueResult();
	}

	public void deleteProductByProductId(int id) {
		Query query = getSession().createSQLQuery(
				"delete from Product where id = :id");
		query.setInteger("id", id);
		query.executeUpdate();

	}

}