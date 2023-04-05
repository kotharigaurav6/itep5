// program showing the concept of method overloading
class Greater
{
    void greater(int a,int b)
    {
        int res = a>b ? a : b;
        System.out.println("int parameters");
        System.out.println("Greater number : "+res);
    }
    void greater(double a,double b)
    {
        double res = a>b ? a : b;
        System.out.println("double parameters");
        System.out.println("Greater number : "+res);
    }
}
class Overload4
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        obj.greater(45,56);
        obj.greater(4.3,3.4);
    }
}