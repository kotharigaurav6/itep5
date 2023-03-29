// Deep copy

class Person
{
    String name;
    int age;
    Address address;

    Person(String name,int age,Address address)
    {
        this.name=name;
        this.age=age;
        this.address=address;
    }
    Person(Person p1)
    {
        name = p1.name;
        age = p1.age;
        address = new Address(p1.address);
    }
}
class CDemo23
{
    public static void main(String args[])
    {
        Address address = new Address("Indore","Madhya Pradesh");
        Person p1 = new Person("Andrew Anderson",23,address);
        Person p2 = new Person(p1);

        p2.address.city="Bhopal";
        p2.address.state="MP";

        System.out.println("-------Details-------");
        System.out.println("Name : "+p1.name);
        System.out.println("Age : "+p1.age);
        System.out.println("Address\n\tCity : "+p1.address.city);
        System.out.println("\tState : "+p1.address.state);
        
        System.out.println("\nName : "+p2.name);
        System.out.println("Age : "+p2.age);
        System.out.println("Address\n\tCity : "+p2.address.city);
        System.out.println("\tState : "+p2.address.state);       
    }
}