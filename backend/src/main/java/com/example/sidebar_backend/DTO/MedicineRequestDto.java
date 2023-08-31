package com.example.sidebar_backend.DTO;

import java.math.BigDecimal;
import java.time.LocalDate;

public class MedicineRequestDto {
    private String medicine;
    private String batch;
    private LocalDate batchExpiry;
    private int unitsPerStrip;
    private int numStrips;
    private int freeStrips;
    private int gstTotal;
    private double pricePerStrip;
    private double mrpPerStrip;
    private double discount;
    private String hsnCode;
    private String rackNo;
    private String boxNo;

    // Getters and setters

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public LocalDate getBatchExpiry() {
        return batchExpiry;
    }

    public void setBatchExpiry(LocalDate batchExpiry) {
        this.batchExpiry = batchExpiry;
    }

    public int getUnitsPerStrip() {
        return unitsPerStrip;
    }

    public void setUnitsPerStrip(int unitsPerStrip) {
        this.unitsPerStrip = unitsPerStrip;
    }

    public int getNumStrips() {
        return numStrips;
    }

    public void setNumStrips(int numStrips) {
        this.numStrips = numStrips;
    }

    public int getFreeStrips() {
        return freeStrips;
    }

    public void setFreeStrips(int freeStrips) {
        this.freeStrips = freeStrips;
    }

    public int getGstTotal() {
        return gstTotal;
    }

    public void setGstTotal(int gstTotal) {
        this.gstTotal = gstTotal;
    }

    public double getPricePerStrip() {
        return pricePerStrip;
    }

    public void setPricePerStrip(double pricePerStrip) {
        this.pricePerStrip = pricePerStrip;
    }

    public double getMrpPerStrip() {
        return mrpPerStrip;
    }

    public void setMrpPerStrip(double mrpPerStrip) {
        this.mrpPerStrip = mrpPerStrip;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public String getHsnCode() {
        return hsnCode;
    }

    public void setHsnCode(String hsnCode) {
        this.hsnCode = hsnCode;
    }

    public String getRackNo() {
        return rackNo;
    }

    public void setRackNo(String rackNo) {
        this.rackNo = rackNo;
    }

    public String getBoxNo() {
        return boxNo;
    }

    public void setBoxNo(String boxNo) {
        this.boxNo = boxNo;
    }
}
