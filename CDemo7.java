// program showing the concept of constructor

import java.util.Scanner;
class CDemo7
{
    int a;
    double b;
    String c;
    CDemo7() // constructor
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a,b and c : ");
        a = sc.nextInt();
        b = sc.nextDouble();
            sc.nextLine();
        c = sc.nextLine();

            System.out.println("default constructor | No argument constructor called");
    }
    void display()
    {
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("c : "+c);
    }
    public static void main(String args[])
    {
      CDemo7 cobj = new CDemo7();
      cobj.display();  
    }
}