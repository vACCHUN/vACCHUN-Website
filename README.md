# ✈️ vACCHUN Website

Official website of **vACCHUN (Virtual Area Control Center Hungary)** – a VATSIM organization supporting virtual air traffic control in Hungary.

This site was built with **vanilla PHP**, **HTML**, **CSS**, and **JavaScript**, and features custom-built systems like a stand finder, chart viewer, and NOTAM display – specifically designed for Hungarian virtual aviation.

---

## 🔧 Setup Instructions

You can run the website either using **WSL + Apache2 (Ubuntu)** or **XAMPP (Windows)**. Setup steps for both are included below.

---

## 💻 WSL + Apache2 Setup

### 0. Install Apache2 and PHP

```bash
sudo apt update
sudo apt install apache2 php libapache2-mod-php php-curl php-mbstring php-xml php-mysql unzip
```

### 1. Clone the repository

```bash
cd /var/www/html
sudo git clone https://github.com/vACCHUN/vACCHUN-Website.git
```

### 2. Switch to `dev` branch (if not already on dev)

```bash
cd vACCHUN-Website
sudo git checkout dev
```

### 3. Set folder permissions for dynamic content

```bash
sudo chown -R www-data:www-data /var/www/html/vACCHUN-Website/events
```

### 4. Create `config.php` in the root directory

Create a file named `config.php` in the root of the project and add the following content:

```php
<?php
$webhookurl = "https://discord.com/api/webhooks/123";
$pociAPI = "https://xyz.com";
```

This is required for feedback submission and other integrations.


---

## 🖥️ XAMPP Setup (Windows)

### 0. Start Apache in XAMPP

Open the XAMPP Control Panel and start the Apache service.

### 1. Clone the repository

Open Command Prompt:

```bash
cd C:\xampp\htdocs
git clone https://github.com/vACCHUN/vACCHUN-Website.git
```

### 2. Create `config.php` file

In the root of `vACCHUN-Website`, create a file called `config.php` with the following content:

```php
<?php
$discordWebhookUrl = "https://discord.com/api/webhooks/123546";
```

Now the site should be accessible at:  
**http://localhost/vACCHUN-Website/**

---

## 📦 Features

- **METAR Display**: Real-time weather fetched from VATSIM METAR API  
- **NOTAM System**: Dynamic NOTAM viewer with filterable Hungarian FIR airports  
- **Stand Finder**: Custom PHP-based logic for assigning gates based on aircraft type and destination  
- **Bing Maps Integration**: Interactive airport map with stand highlighting  
- **Chart Viewer**: Categorized PDF chart viewer for each airport  
- **Language Support**: Switch between English and Hungarian  
- **Chart/NOTAM Caching**: Efficient performance using local caching  
- **Responsive Design**: Works on desktop and mobile

---

## 📁 Folder Overview

| Path                          | Description                                      |
|-------------------------------|--------------------------------------------------|
| `/events/`                    | Stores dynamic NOTAM data (cache + display)     |
| `/stands/`                    | Contains static stand data and PHP logic        |
| `/js/`                        | Modular JavaScript (chart loader, NOTAM, nav)   |
| `/css/`                       | Site-specific styling                           |

---

## ⚙️ Technologies Used

- **PHP** (Procedural, no framework)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Bing Maps API**
- **REST API consumption (VATSIM)**
- **Minimal use of cookies/localStorage for UX**

---

## 🧪 Developer Note

This is a real-world project used by Hungarian VATSIM pilots and controllers on a daily basis.  
Although not built with Laravel or any backend framework, it demonstrates:

- Full-stack problem solving
- Custom API integration (VATSIM)
- Server-client dynamic data handling
- Real-world logic implementation (stand allocation)

---

Charts are for simulation purposes only.
