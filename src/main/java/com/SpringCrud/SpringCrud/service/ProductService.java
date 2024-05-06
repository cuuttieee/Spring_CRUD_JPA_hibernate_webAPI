package com.SpringCrud.SpringCrud.service;

import com.SpringCrud.SpringCrud.entity.Product;
import com.SpringCrud.SpringCrud.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository repo;
    public Product saveProduct(Product product){
      return   repo.save(product);
    }

    public List<Product> saveProducts(List<Product> products){
        return   repo.saveAll(products);
    }

    public List<Product> getProduct(){
        return repo.findAll();
    }
    public Product getProductByID(int id){
        return repo.findById(id).orElse(null);
    }
    public Product getProductByName(String Name){
        return repo.findByName(Name);
    }

    public String deleteProduct(int id){
        repo.deleteById(id);
        return "Product With ID : " + id + "Has Been Removed";
    }
  /*  public Product updateProduct(Product product){
        Product existingProduct = repo.findById(product.getId()).orElse(null);
        existingProduct.setName(product.getName());

    }*/
}
