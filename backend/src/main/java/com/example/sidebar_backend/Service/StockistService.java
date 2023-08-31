package com.example.sidebar_backend.Service;


import com.example.sidebar_backend.Model.Stockist;
import com.example.sidebar_backend.Repository.StockistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockistService {

    @Autowired
    private StockistRepository stockistRepository;


    public  Stockist getStockistById(String id) {
        return stockistRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Stockist not found with ID: " + id));
    }



    public Stockist createStockist(Stockist stockist) {

        return stockistRepository.save(stockist);
    }

    public List<Stockist> getAllStockists() {

        return stockistRepository.findAll();
    }

    public void deleteStockist(String id) {

        stockistRepository.deleteById(id);
    }

}