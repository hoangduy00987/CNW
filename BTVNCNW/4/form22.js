// Khai báo hàm AddPrice()
function AddPrice(amount) {
  // Sử dụng đối tượng this để truy cập thuộc tính price của đối tượng đang hoạt động
  this.price = amount;
}

function Book(title, author, content) {
  
  this.title = title;
  this.author = author;
  this.content = content;
  this.price = 0;

  
  this.AddPrice = AddPrice;
}

var MyBook = new Book("Java", "Sun", "OOP");

MyBook.AddPrice(500);
document.write("Book title is : " + MyBook.title + "<br>");
document.write("Book author is : " + MyBook.author + "<br>");
document.write("Book content is : " + MyBook.content + "<br>");
document.write("Book price is : " + MyBook.price + "<br>");
with (document.location) {
  href = "form22.html";
}