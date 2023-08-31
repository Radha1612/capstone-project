package com.example.sidebar_backend.Controller;

import com.example.sidebar_backend.Model.Stockist;
import com.example.sidebar_backend.Repository.StockistRepository;
import com.example.sidebar_backend.Service.StockistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
public class StockistController {

    @Autowired
    private StockistRepository stockistRepository;
    @Autowired
    private StockistService stockistService;

    @PostMapping("/stockist")
    public Stockist createStockist(@RequestBody Stockist stockist) {

        return stockistService.createStockist(stockist);
    }

    @GetMapping("/stockist")
    public List<Stockist> getAllStockists() {
        return stockistService.getAllStockists();
    }




    @GetMapping("/{id}")
    public ResponseEntity<Stockist> getStockistById(@PathVariable String id) {
        Stockist stockist = stockistRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stockist not found with id: " + id));
        return ResponseEntity.ok(stockist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stockist> updateStockist(@PathVariable String id, @RequestBody Stockist updatedStockist) {
        Stockist stockist = stockistRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stockist not found with id: " + id));

        stockist.setName(updatedStockist.getName());
        stockist.setGstNumber(updatedStockist.getGstNumber());
        stockist.setEmail(updatedStockist.getEmail());


        Stockist updated = stockistRepository.save(stockist);
        return ResponseEntity.ok(updated);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteStockist(@PathVariable String id) {
        Stockist existingStockist = stockistService.getStockistById(id);
        if (existingStockist == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        stockistService.deleteStockist(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    private final Logger LOGGER = LoggerFactory.getLogger(StockistController.class);
}