package com.example.ups;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "ups_entries")
public class UpsEntry {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull @Min(1)
    private Integer noOfUps;
    @NotBlank @Size(max = 100)
    private String referenceNo;

    public Long getId() { return id; }
    public Integer getNoOfUps() { return noOfUps; }
    public void setNoOfUps(Integer n) { this.noOfUps = n; }
    public String getReferenceNo() { return referenceNo; }
    public void setReferenceNo(String r) { this.referenceNo = r; }
}
