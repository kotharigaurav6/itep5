// program showing the concept of composition
import java.util.Scanner;
class Book{
    String book_name;
    double book_price;

    void getBookDetails()
    {
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter book_name : ");
       book_name = sc.nextLine();

       System.out.println("Enter book_price : ");
       book_price = sc.nextDouble(); 
    }
}
class Library{
    Book books[];
    Library(Book book[])
    {
        this.books=book;
    }
    void showBookDetails()
    {
        System.out.println("--------Book Details--------");
        for(Book b : books)
        {
            System.out.println(b.book_name+"\t"+b.book_price);
        }
    }
}
class Composition
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of books : ");
        int num = sc.nextInt();

            Book book[] = new Book[num];
            for(int i=0;i<book.length;i++)
            {
                book[i] = new Book();
                book[i].getBookDetails();
            }

            Library library = new Library(book);
            library.showBookDetails();
    }
}