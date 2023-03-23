// this can also be passed as an argument inside function call
class Fun12
{
    int a;
    void show(Fun12 object)
    {
        System.out.println("show method called : "+object);
    }
    void draw(int aa)
    {
        System.out.println("value of aa : "+aa);
    }
    void display()
    {
        System.out.println("display method called");
        show(this);
        this.a = 34;
        draw(this.a);
    }
    public static void main(String args[])
    {
        Fun12 obj = new Fun12();
        obj.display();
    }   
}