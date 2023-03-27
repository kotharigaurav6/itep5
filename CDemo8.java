// program showing the concept of constructor

import java.util.Scanner;
class CDemo8
{
    /* instance variable */
    int a;
    double b;
    String c;
    CDemo8(int a,double b,String c) // constructor
    {
        this.a=a;
        this.b=b;
        this.c=c;
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
        System.out.println("Enter values of a,b and c : ");
        int a = sc.nextInt();
        double b = sc.nextDouble();
            sc.nextLine();
        String c = sc.nextLine();

        CDemo8 cobj = new CDemo8(a,b,c);
        cobj.display();  
    }
}