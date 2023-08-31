package com.example.sidebar_backend.Controller;
//import com.example.sidebar_backend.DTO.InvoiceRequest;
//import com.example.sidebar_backend.DTO.MedicineRequest;
//import com.example.sidebar_backend.Model.Invoice;
//import com.example.sidebar_backend.Repository.InvoiceRepository;
//import com.example.sidebar_backend.Service.InvoiceServices;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.crossstore.ChangeSetPersister;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/invoices")
//public class InvoiceController {
//    private InvoiceRepository invoiceRepository;
//
//    public InvoiceController(InvoiceRepository invoiceRepository) {
//        this.invoiceRepository = invoiceRepository;
//    }
//    private InvoiceServices invoiceService;
//
//    @Autowired
//    public InvoiceController(InvoiceServices invoiceService) {
//        this.invoiceService = invoiceService;
//    }
//
//    @GetMapping("/add")
//    public List<Invoice> getAllInvoices() {
//        return invoiceService.getAllInvoices();
//    }
//
//    @PostMapping("/add")
//    public Invoice createInvoice(@RequestBody Invoice invoice) {
//        return invoiceService.createInvoice(invoice);
//    }
//
////    @PostMapping("/save")
////    public Invoice saveInvoice(@RequestBody Invoice invoice) {
////        return invoiceService.saveInvoice(invoice);
////    }
//
////    @PostMapping("/save")
////    public ResponseEntity<String> saveInvoice(@RequestBody InoviceRequest request) {
////        try {
////            Invoice invoice = new Invoice();
////            invoice.setInvoiceNumber(request.getInvoiceNumber());
////            invoice.setStockistName(request.getStockistName());
////            invoice.setInvoiceDate(request.getInvoiceDate());
////            invoice.setItems(request.getInvoiceItems()); // Set the items (rows)
////
////            Invoice savedInvoice = invoiceRepository.save(invoice);
////            return ResponseEntity.ok(String.valueOf(savedInvoice));
////        } catch (Exception e) {
////            e.printStackTrace();
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
////                    .body("An error occurred while saving the invoice: " + e.getMessage());
////        }
////    }
//
////    @PostMapping("/save")
////    public ResponseEntity<String> saveInvoice(@RequestBody InvoiceRequest request) {
////        try {
////            // Create Invoice entity from the request
////            Invoice invoice = new Invoice();
////            invoice.setInvoiceNumber(request.getInvoiceNumber());
////            invoice.setStockistName(request.getStockistName());
////            invoice.setInvoiceDate(request.getInvoiceDate());
////            // other invoice fields
////
////            // Create Medicine entities from the request
////            List<Medicine> medicines = new ArrayList<>();
////            for (MedicineRequest medicineRequest : request.getMedicines()) {
////                Medicine medicine = new Medicine();
////                medicine.setMedicine(medicineRequest.getMedicine());
////                medicine.setBatch(medicineRequest.getBatch());
////                medicine.setBatchExpiry(medicineRequest.getBatchExpiry());
////                medicine.setUnitsPerStrip(medicineRequest.getUnitsPerStrip());
////                medicine.setNumStrips(medicineRequest.getNumStrips());
////                // other medicine fields
////                medicines.add(medicine);
////            }
////
////            invoice.setMedicines(medicines);
////
////            // Save the invoice with medicine details
////            invoiceService.saveInvoiceWithMedicine(invoice);
////
////            return ResponseEntity.ok("Invoice saved successfully.");
////        } catch (Exception e) {
////            e.printStackTrace();
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
////                    .body("An error occurred while saving the invoice: " + e.getMessage());
////        }
////    }
//
//    @GetMapping("/{id}")
//    public Invoice getInvoiceById(@PathVariable String id) {
//        try {
//            return invoiceService.getInvoiceById(id)
//                    .orElseThrow(() -> {
//                        return new ChangeSetPersister.NotFoundException();
//                    });
//        } catch (ChangeSetPersister.NotFoundException e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    @PutMapping("/{id}")
//    public Invoice updateInvoice(@PathVariable String id, @RequestBody Invoice updatedInvoice) {
//        return invoiceService.updateInvoice(id, updatedInvoice);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteInvoice(@PathVariable String id) {
//        invoiceService.deleteInvoice(id);
//    }
//}


//import com.example.sidebar_backend.Model.Invoice;
//import com.example.sidebar_backend.Service.InvoiceServices;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/invoices")
//public class InvoiceController {
//
//    @Autowired
//    private InvoiceServices invoiceService;
//
//    @PostMapping("/add")
//    public Invoice addInvoice(@RequestBody Invoice invoice) {
//        return invoiceService.addInvoice(invoice);
//    }
//
//    @GetMapping("/add")
//    public List<Invoice> getAllInvoices() {
//        return invoiceService.getAllInvoices();
//    }
//
//        @GetMapping("/{id}")
//    public Invoice getInvoiceById(@PathVariable String id) {
//        try {
//            return invoiceService.getInvoiceById(id)
//                    .orElseThrow(() -> {
//                        return new ChangeSetPersister.NotFoundException();
//                    });
//        } catch (ChangeSetPersister.NotFoundException e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    @PutMapping("/{id}")
//    public Invoice updateInvoice(@PathVariable String id, @RequestBody Invoice updatedInvoice) {
//        return invoiceService.updateInvoice(id, updatedInvoice);
//    }
//
//
//    @DeleteMapping("/{id}")
//    public void deleteInvoice(@PathVariable Long id) {
//        invoiceService.deleteInvoice(id);
//    }
//
//    // Add more endpoints as needed
//}


import com.example.sidebar_backend.DTO.InvoiceRequestDto;
import com.example.sidebar_backend.DTO.MedicineRequestDto;
import com.example.sidebar_backend.Model.Invoice;
import com.example.sidebar_backend.Model.Medicine;
import com.example.sidebar_backend.Repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceRepository invoiceRepository;

    @PostMapping("/save")
    public ResponseEntity<?> createInvoice(@RequestBody InvoiceRequestDto requestDto) {
        try {
            Invoice invoice = new Invoice();
            invoice.setInvoiceNumber(requestDto.getInvoiceNumber());
            invoice.setStockistName(requestDto.getStockistName());
            invoice.setInvoiceDate(requestDto.getInvoiceDate());
            invoice.setRemarks(requestDto.getRemarks());

            List<Medicine> medicines = new ArrayList<>();
            for (MedicineRequestDto medicineDto : requestDto.getMedicines()) {
                Medicine medicine = new Medicine();
                // Map properties from medicineDto to medicine entity
                medicine.setMedicine(medicineDto.getMedicine());  // Example mapping
                medicine.setBatch(medicineDto.getBatch());
                // Example mapping
                // Map other properties similarly
                medicine.setBatchExpiry(medicineDto.getBatchExpiry());
                medicine.setUnitsPerStrip(medicineDto.getUnitsPerStrip());
                medicine.setNumStrips(medicineDto.getNumStrips());
                medicine.setFreeStrips(medicineDto.getFreeStrips());
                medicine.setGstTotal(medicineDto.getGstTotal());
                medicine.setPricePerStrip(medicineDto.getPricePerStrip());
                medicine.setMrpPerStrip(medicineDto.getMrpPerStrip());
                medicine.setDiscount(medicineDto.getDiscount());
                medicine.setHsnCode(medicineDto.getHsnCode());
                medicine.setRackNo(medicineDto.getRackNo());
                medicine.setBoxNo(medicineDto.getBoxNo());
                medicines.add(medicine);
            }
            invoice.setMedicines(medicines);

            invoiceRepository.save(invoice);

            return ResponseEntity.ok("Invoice saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving invoice");
        }
    }
}



