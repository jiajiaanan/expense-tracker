# expense-tracker

![image](/preview_login.png)
![image](/preview_home.png)

## 介紹

可創建分類帳務的家庭記帳簿

## 功能
- 註冊帳號：使用本地登入策略／Facebook登入策略登入使用者資料
- 登入帳號：使用登入使用者資料
- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的內容（名稱、日期、類別、金額）
- 刪除任何一筆支出 (一次只能刪除一筆)
- 根據「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

## 開始使用

1. 需安裝node.js 與 npm
2. 在終端機使用 git clone 複製 GitHub 的專案到本機端
    
    ```jsx
    git clone https://github.com/jiajiaanan/expense-tracker.git
    ```
    
3. 透過終端機進入專案資料夾
    
    ```jsx
    cd expense-tracker
    ```
    
4. 安裝 npm套件，在終端機輸入：
    
    ```jsx
    npm install
    ```
    
5. 安裝完畢後，在終端機輸入：
    
    ```jsx
    npm run start
    ```
    
6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
    
    ```jsx
    Listening on http://localhost:3000
    ```
    
7. 欲中斷連線，在終端機輸入：
    
    ```jsx
    ctrl + c
    ```
    

## 開發工具

- Node.js 14.16.0
- Express 4.18.1
- Express-Handlebars 3.0.0
- Bootstrap 5.2
- Font-awesome 6.1.2
- method-override 3.0.0
- mongoose 6.5.4
- express-session 1.17.1
- passport 0.4.1
- passport-facebook 3.0.0
- passport-local 1.0.0
- dotenv 8.2.0
- connect-flash 0.1.1
- bcryptjs 2.4.3
- handlebars-helpers 0.10.0
