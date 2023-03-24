// program showing the concept of getter and setter methods
class Student 
{
    private String name="Andrew";
    /* user defined method */
    public String getName()
    {
        return name;
    }
}
class Getter_Setter
{
//    private String name="Mathew";
    public static void main(String args[])
    {
        // Getter_Setter obj = new Getter_Setter(); 
        // System.out.println("Student name : "+obj.name);

        Student sobj = new Student();
        System.out.println("Student name : "+sobj.getName());
    }
}