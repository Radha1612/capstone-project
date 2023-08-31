package com.example.sidebar_backend.DTO;

import java.time.LocalDate;
import java.util.List;
public class InvoiceRequestDto {
    private String invoiceNumber;
    private String stockistName;
    private LocalDate invoiceDate;
    private String remarks;
    private List<MedicineRequestDto> medicines;

    // Getters and setters

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

    public List<MedicineRequestDto> getMedicines() {
        return medicines;
    }

    public void setMedicines(List<MedicineRequestDto> medicines) {
        this.medicines = medicines;
    }
}