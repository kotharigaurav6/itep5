// program showing the concept of instanceof operator

class Test{}
class InstanceoF  extends Test
{
    public static void main(String args[])
    {
        InstanceoF obj = new InstanceoF();
        // if(obj instanceof InstanceoF)
        //     System.out.println("Yes, It is an instance");
        // else
        //     System.out.println("No, It's not an instance");

        // if(obj instanceof Test)
        //     System.out.println("Yes, It is an instance");
        // else
        //     System.out.println("No, It's not an instance");

        // obj = null;    
        // if(obj instanceof Test)
        //     System.out.println("Yes, It is an instance");
        // else
        //     System.out.println("No, It's not an instance");

    //    Test obj1 = new Test();    
    //     if(obj1 instanceof Test)
    //         System.out.println("Yes, It is an instance");
    //     else
    //         System.out.println("No, It's not an instance");

    //     if(obj1 instanceof InstanceoF)
    //         System.out.println("Yes, It is an instance");
    //     else
    //         System.out.println("No, It's not an instance");

        Test obj2 = new InstanceoF();
        if(obj2 instanceof Test)
            System.out.println("Yes, It is an instance");
        else
            System.out.println("No, It's not an instance");
 
        if(obj2 instanceof InstanceoF)
            System.out.println("Yes, It is an instance");
        else
            System.out.println("No, It's not an instance");

    }
}