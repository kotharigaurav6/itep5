// program showing the concept of constructor overloading
class Greater
{
    Greater(int a,int b)
    {
        int res = a>b ? a : b;
        System.out.println("Greater number : "+res);
    }
    Greater(int a,int b,int c)
    {
        int res = a>b ? (a>c?a:c) : (b>c?b:c);
        System.out.println("Greater number : "+res);
    }
}
class Overload3
{
    public static void main(String args[])
    {
        Greater obj1 = new Greater(45,56);
        Greater obj2 = new Greater(43,34,45);
    }
}