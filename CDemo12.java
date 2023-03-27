// program showing the concept of constructor and this keyword
class Test
{
    TestMain object;
    Test(TestMain obj) // 5
    {
        object=obj; // 6
    }
    void showTestMainValue() // 9
    {
        System.out.println("value : "+object.value); //10
    }
}
class TestMain
{
    int value = 100;
    TestMain() // constructor // 3
    {
    Test obj = new Test(this); //4 //7 
        obj.showTestMainValue(); //8
    }
}
class CDemo12   // 1
{
    public static void main(String args[])
    {
        new TestMain(); // anonymous object // 2
    }
}