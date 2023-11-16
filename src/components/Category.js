import React from "react"

export const Category = () => {
  return (
    <div>
      <form >
        <div><label for = "category">Device</label></div>
        <select>
          <option>Laptop</option>
          <option>System Unit</option>
          <option>Monitor</option>
          <option>Printer</option>
          <option>UPS</option>
        </select>
      </form>
    </div>
  )
}