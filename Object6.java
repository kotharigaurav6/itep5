// program showing the concept of hashCode() and equals()

class Student{
    String name;
    Student(String name){
        this.name=name;
    }
}
class Object6{
    public static void main(String args[]){
        Student s1 = new Student("Andrew");
        System.out.println("name : "+s1.name);
        System.out.println("hashCode : "+s1.hashCode());

        Student s2 = new Student("Andrew");
        System.out.println("\nname : "+s2.name);
        System.out.println("hashCode : "+s2.hashCode());
        System.out.println("Check : "+s1.equals(s2));
    }
}