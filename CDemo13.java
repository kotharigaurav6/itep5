// program showing the concept of constructor and this keyword
class Test
{
    Test(TestMain obj) 
    {
//        System.out.println("value : "+obj); 
        System.out.println("value : "+obj.value); 
        System.out.println("value : "+obj.value2); 
    }
}
class TestMain
{
    int value = 100;
    double value2=34.45;
    TestMain() // constructor
    {
        new Test(this); 
    }
}
class CDemo13  
{
    public static void main(String args[])
    {
        new TestMain(); // anonymous object
    }
}