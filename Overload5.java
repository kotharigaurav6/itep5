// program showing the concept of method overloading
class Greater
{
    void greater(int a,double b)
    {
        double res = a>b ? a : b;
        System.out.println("int-double parameters");
        System.out.println("Greater number : "+res);
    }
    void greater(double a,int b)
    {
        double res = a>b ? a : b;
        System.out.println("double-int parameters");
        System.out.println("Greater number : "+res);
    }
}
class Overload5
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        obj.greater(45,5.6);
        obj.greater(4.3,34);
    }
}