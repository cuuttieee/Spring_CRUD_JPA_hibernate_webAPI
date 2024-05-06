package com.SpringCrud.SpringCrud.controller;

import com.SpringCrud.SpringCrud.entity.Product;
import com.SpringCrud.SpringCrud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
@Autowired
    private ProductService service;
@PostMapping("/AddProduct") // passed
    public Product addProduct (@RequestBody Product product){
        return service.saveProduct(product);
    }
    @PostMapping("/AddProducts") //PASSED
    public Product addProducts (@RequestBody List<Product> products){
        return (Product) service.saveProducts(products);
    }
    @GetMapping("/Products") //PASSED
    public List<Product> findAllProducts(){
    return  service.getProduct();
    }
    @GetMapping("/ProductsByID/{id}")
    public Product findProductByID(@PathVariable int id){
    return service.getProductByID(id);
    }
    @GetMapping("/ProductsByName/{Name}")

    public Product findProductByName(@PathVariable String Name){
        return service.getProductByName(Name);
    }
    @DeleteMapping("/DeleteProduct/{id}")
    public String deleteProduct(@PathVariable int id){
    return service.deleteProduct(id);
    }
}
