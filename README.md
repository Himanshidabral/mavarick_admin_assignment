# MavarickAdminAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [Angular CLI](https://angular.io/cli) (version 18.x)
- [npm](https://www.npmjs.com/) (Node Package Manager)


## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Himanshidabral/mavarick_admin_assignment.git
   cd mavarick_admin_assignment

2.Install Dependencies


 npm install


3.Development Server
 ng serve
Navigate to http://localhost:4200/ in your browser to view the application.

userName and password is shared in respective mail 

## Project Overview
###  Introduction
This document provides an overview of an Angular project that is organized into two main modules: Products Module and Dashboard Module. The project aims to facilitate product management with CRUD (Create, Read, Update, Delete) operations and visualize data through various charts on a dashboard.

### 2. Products Module
The Products Module is responsible for managing product-related functionalities. This module allows users to perform CRUD operations on products.

Features
1. Create Product: A form is provided for users to input product details including Name, Price, Discount, Category (dropdown), Size, and Vendor (dropdown).
2. Read Products: Display a list of products in a tabular format.
3. Update Product: Edit product details via an update form.
4. Delete Product: Remove products from the list.
Key Components
1. ProductListComponent: Displays the list of products with options to view, edit, and delete.
2. ProductFormComponent: Provides a form for creating or updating product details.
.

### 2. Dashboard Module

-The Dashboard Module is designed for data visualization. It includes various charts to provide insights into product sales and other relevant metrics.

Features
1. Charts Page: Displays charts that are independently implemented components.
Key Charts
1. Sales by Category: A bar chart illustrating sales distribution across different categories.
2. Monthly Revenue: A bar chart showing revenue generated each month.
3. Yearly Sales Trends: A line chart depicting sales trends over the year.
Key Components
1. SalesByCategoryChartComponent: Displays the bar chart for sales by category.
2. MonthlyRevenueChartComponent: Shows the bar chart for monthly revenue.
3. YearlySalesTrendsChartComponent: Renders the line chart for yearly sales trends.


  ## Usage

- Navigate to `http://localhost:4200` to view the application.
- Use the product management features to add, edit, or delete products.
- View the charts on the designated page.

## Notes

- Ensure you have Node.js and Angular CLI installed.
- For any issues, please refer to the project documentation or raise an issue on the repository.


