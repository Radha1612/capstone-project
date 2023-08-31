package com.example.sidebar_backend.Model;

//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.math.BigDecimal;
//import java.time.LocalDate;
//
//@Document(collection = "invoices")
//public class Invoice {
//    @Id
//    private String id;
//    private String medicine;
//    private String batch;
//    private LocalDate batchExpiry;
//    private int unitsPerStrip;
//    private int numStrips;
//    private int freeStrips;
//    private BigDecimal gstTotal;
//    private BigDecimal pricePerStrip;
//    private BigDecimal mrpPerStrip;
//    private BigDecimal discount;
//    private String hsnCode;
//    private String rackNo;
//
//    @Override
//    public String toString() {
//        return "Invoice{" +
//                "id='" + id + '\'' +
//                ", medicine='" + medicine + '\'' +
//                ", batch='" + batch + '\'' +
//                ", batchExpiry=" + batchExpiry +
//                ", unitsPerStrip=" + unitsPerStrip +
//                ", numStrips=" + numStrips +
//                ", freeStrips=" + freeStrips +
//                ", gstTotal=" + gstTotal +
//                ", pricePerStrip=" + pricePerStrip +
//                ", mrpPerStrip=" + mrpPerStrip +
//                ", discount=" + discount +
//                ", hsnCode='" + hsnCode + '\'' +
//                ", rackNo='" + rackNo + '\'' +
//                ", boxNo='" + boxNo + '\'' +
//                ", netPrice=" + netPrice +
//                ", addTaxOnFreeStrips=" + addTaxOnFreeStrips +
//                '}';
//    }
//
//    public Invoice(String id, String medicine, String batch, LocalDate batchExpiry, int unitsPerStrip, int numStrips, int freeStrips, BigDecimal gstTotal, BigDecimal pricePerStrip, BigDecimal mrpPerStrip, BigDecimal discount, String hsnCode, String rackNo, String boxNo, BigDecimal netPrice, boolean addTaxOnFreeStrips) {
//        this.id = id;
//        this.medicine = medicine;
//        this.batch = batch;
//        this.batchExpiry = batchExpiry;
//        this.unitsPerStrip = unitsPerStrip;
//        this.numStrips = numStrips;
//        this.freeStrips = freeStrips;
//        this.gstTotal = gstTotal;
//        this.pricePerStrip = pricePerStrip;
//        this.mrpPerStrip = mrpPerStrip;
//        this.discount = discount;
//        this.hsnCode = hsnCode;
//        this.rackNo = rackNo;
//        this.boxNo = boxNo;
//        this.netPrice = netPrice;
//        this.addTaxOnFreeStrips = addTaxOnFreeStrips;
//    }
//
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getMedicine() {
//        return medicine;
//    }
//
//    public void setMedicine(String medicine) {
//        this.medicine = medicine;
//    }
//
//    public String getBatch() {
//        return batch;
//    }
//
//    public void setBatch(String batch) {
//        this.batch = batch;
//    }
//
//    public LocalDate getBatchExpiry() {
//        return batchExpiry;
//    }
//
//    public void setBatchExpiry(LocalDate batchExpiry) {
//        this.batchExpiry = batchExpiry;
//    }
//
//    public int getUnitsPerStrip() {
//        return unitsPerStrip;
//    }
//
//    public void setUnitsPerStrip(int unitsPerStrip) {
//        this.unitsPerStrip = unitsPerStrip;
//    }
//
//    public int getNumStrips() {
//        return numStrips;
//    }
//
//    public void setNumStrips(int numStrips) {
//        this.numStrips = numStrips;
//    }
//
//    public int getFreeStrips() {
//        return freeStrips;
//    }
//
//    public void setFreeStrips(int freeStrips) {
//        this.freeStrips = freeStrips;
//    }
//
//    public BigDecimal getGstTotal() {
//        return gstTotal;
//    }
//
//    public void setGstTotal(BigDecimal gstTotal) {
//        this.gstTotal = gstTotal;
//    }
//
//    public BigDecimal getPricePerStrip() {
//        return pricePerStrip;
//    }
//
//    public void setPricePerStrip(BigDecimal pricePerStrip) {
//        this.pricePerStrip = pricePerStrip;
//    }
//
//    public BigDecimal getMrpPerStrip() {
//        return mrpPerStrip;
//    }
//
//    public void setMrpPerStrip(BigDecimal mrpPerStrip) {
//        this.mrpPerStrip = mrpPerStrip;
//    }
//
//    public BigDecimal getDiscount() {
//        return discount;
//    }
//
//    public void setDiscount(BigDecimal discount) {
//        this.discount = discount;
//    }
//
//    public String getHsnCode() {
//        return hsnCode;
//    }
//
//    public void setHsnCode(String hsnCode) {
//        this.hsnCode = hsnCode;
//    }
//
//    public String getRackNo() {
//        return rackNo;
//    }
//
//    public void setRackNo(String rackNo) {
//        this.rackNo = rackNo;
//    }
//
//    public String getBoxNo() {
//        return boxNo;
//    }
//
//    public void setBoxNo(String boxNo) {
//        this.boxNo = boxNo;
//    }
//
//    public BigDecimal getNetPrice() {
//        return netPrice;
//    }
//
//    public void setNetPrice(BigDecimal netPrice) {
//        this.netPrice = netPrice;
//    }
//
//    public boolean isAddTaxOnFreeStrips() {
//        return addTaxOnFreeStrips;
//    }
//
//    public void setAddTaxOnFreeStrips(boolean addTaxOnFreeStrips) {
//        this.addTaxOnFreeStrips = addTaxOnFreeStrips;
//    }
//
//    private String boxNo;
//    private BigDecimal netPrice;
//    private boolean addTaxOnFreeStrips;
//
//
//
//
//}
//


import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Entity
@Document(collection = "medicines")
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String invoiceNumber;
    private String stockistName;
    private LocalDate invoiceDate;
    private String remarks;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "invoice_id")
    private List<Medicine> medicines = new ArrayList<>();

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String getStockistName() {
        return stockistName;
    }

    public void setStockistName(String stockistName) {
        this.stockistName = stockistName;
    }

    public LocalDate getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public List<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(List<Medicine> medicines) {
        this.medicines = medicines;
    }
}