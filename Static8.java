// program showing the concept of static keyword
class SDemo
{
    static int count=0;
    SDemo()
    {
        count++;
    }
}
class Static8
{
    public static void main(String args[])
    {
        SDemo s1 = new SDemo(),s2 = new SDemo();        
        SDemo s3;
            s3 = new SDemo();
            s3 = new SDemo();
        new SDemo();
        System.out.println("No. of objects created : "+SDemo.count);
    }
}





