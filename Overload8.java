// program showing the concept of method overloading
// output : error case
class Greater
{
    int greater(int a,int b)
    {
        int res = a>b ? a : b;
        System.out.println("int parameters");
        return res;
    }
    double greater(int a,int b)
    {
        double res = a>b ? a : b;
        System.out.println("int parameters double return type");
        return res;
    }
}
class Overload8
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        System.out.println("Greater number : "+obj.greater(45,56));
        System.out.println("Greater number : "+obj.greater(45,245));
    }
}