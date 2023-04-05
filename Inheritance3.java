// program showing the concept of single inheritance
import java.util.Scanner;
class Area // parent class
{
    int l,b;
    Area(){}
    Area(int l,int b)
    {
        this.l=l;
        this.b=b;
    }
    int getArea()
    {
        return l*b;
    }
}
class Volume extends Area // child class
{
    int h;
    Volume(int l,int b,int h)
    {
        super(l,b);
        this.h=h;
    }
    int getVolume()
    {
        return getArea()*h;
    }
}
class Inheritance3{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter l,b and h : ");
        int l = sc.nextInt();
        int b = sc.nextInt();
        int h = sc.nextInt();
            Volume obj = new Volume(l,b,h);        
        System.out.println("Area : "+obj.getArea());
        System.out.println("Volume : "+obj.getVolume());
            Area obj1 = new Area();        
        System.out.println("Area : "+obj1.getArea()); 
    }
}