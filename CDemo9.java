// program showing the concept of constructor

import java.util.Scanner;
class CDemo9
{
    /* instance variable */
    int a;
    double b;
    String c;
    CDemo9()
    {
        System.out.println("Default constructor called");
        System.out.println("a : "+a);
        System.out.println("b : "+b);
        System.out.println("c : "+c);
    }
    CDemo9(int a,double b) // constructor
    {
        this.a=a;
        this.b=b;
            System.out.println("Parameterized constructor called");
    }
    void display()
    {
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("c : "+c);
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        double b = sc.nextDouble();
        CDemo9 c1 = new CDemo9();
        CDemo9 cobj = new CDemo9(a,b);
    
        cobj.display();  
    }
}