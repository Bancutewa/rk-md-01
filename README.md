# FORM VÀ TABLE

## FORM

#### Method GET và POST

- GET : dữ liệu được được lên url, tối đa 2048 --> Kém bảo mật, dữ liệu nhỏ , nhanh
- POST: dữ liệu đưa lên HTTP Resquest body --> đưa dữ liệu lớn, bảo mật hơn, chậm hơn

#### Lưu ý

- label giúp focus vào các thẻ input, textarea,... thông qua id của thẻ đó trung với thuộc tính for

- radio -> Lựa chọn một trong các đáp án --> thuộc tính "name" phải giống nhau trong các sự lựa chọn, và phải có giá trị để phân biệt

```
 <input type="radio" value="male" id="radio-1" name="gender" />
 <label for="radio-1" >Male</label>
<input
    type="radio"
    value="female"
    id="radio-2"
    name="gender"
    checked
/>
<label for="radio-2">Female</label>
```

- checkbox -> Lựa chọn nhiều trong các đáp án --> thuộc tính "name" khác nhau

## TABLE

## GIT

# Hướng dẫn sử dụng đưa source lên github

1. Mở terminal Ctrl + `
2. Khởi tạo git `$ git init`
3. Thêm các file code đã thay đổi để sẵn sàng commit: `$ git add .`
4. Kiểm tra trạng thái của git: `$ git status`
5. Commit nội dung đã add: `$ git commit -m "<thông tin mô tả>" `
   // ex: `$ git commit -m "session 01"`
   <!-- Hoàn thành việc commit -->
6. Kết nối tới repo github: `$ git remote add origin <link_repo>`
   // EX: `$ git remote add origin https://github.com/khoalyRikkei/DN_JS_230726_Module_01.git`
7. Đẩy dữ liệu lên repo: git push --set-upstream origin master

## Sau khi đã push thành công. Sau này mỗi lần up code lên chỉ thực hiện 3 bước:

1. `git add .`
2. `git commit -m "<noi_dung>"`
3. `git push`

<!-- Test -->
<!-- Hello world -->

## Clone code

- git clone <link_repo>

<!-- Cấu hình git lần đầu -->

`git config --global user.email "<email_dang_ki>"`
//Ex: `git config --global user.email "khoaly@rikkeisoft.com"`
`git config --global user.name "<username>"`
//Ex: `git config --global user.name "khoaLY"`
