import React from "react";
import { Table } from "react-bootstrap";
import "./NamazTime.css";

function NamazTime() {
  return (
    <>
      <div className="tableTitle">
        <p>নামাজের সময়সূচি</p>
      </div>
      <Table className="m-0 text-center" striped bordered hover>
        <thead className="">
          <tr>
            <th>ওয়াক্ত</th>
            <th>সময়সূচি</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ফজর</td>
            <td>ভোর ০৪:৪৯</td>
          </tr>
          <tr>
            <td>জোহর</td>
            <td>বেলা ১১:৪৫</td>
          </tr>
          <tr>
            <td>আসর</td>
            <td>বিকেল ০৩:৪৩</td>
          </tr>

          <tr>
            <td>মাগরিব</td>
            <td>সন্ধ্যা ০৫:২৩</td>
          </tr>
          <tr>
            <td>ইশা</td>
            <td>রাত ০৬:৩৮</td>
          </tr>
        </tbody>
      </Table>

      <div className="tableFooter">
        <p>ঢাকা, মঙ্গলবার ০১ নভেম্বর ২০২২</p>
      </div>
    </>
  );
}

export default NamazTime;
