package com.example.sidebar_backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Invoice")
public class Stockist {
    @Id
    private String id;
    private String name;
    private String gstNumber;
    private String email;
    private String contactNumber;


    public Stockist(String id, String name, String gstNumber, String email, String contactNumber) {
        this.id = id;
        this.name = name;
        this.gstNumber = gstNumber;
        this.email = email;
        this.contactNumber = contactNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGstNumber() {
        return gstNumber;
    }

    public void setGstNumber(String gstNumber) {
        this.gstNumber = gstNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
// Add other fields as needed

    // Getters and setters
}
