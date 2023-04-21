// program showing the concept of hashCode() and equals()

class Student{
    String name;
    Student(String name){
        this.name=name;
    }
    public String getName(){
        return name;
    }
    @Override
    public boolean equals(Object o){
        /*
        internally it happens
        Student s2 = new Student("Andrew");
        Object o = s2; // upcasting
        */
        if(this==o) return true;
        if(!(o instanceof Student)) return false;

        Student stud = (Student)o; // downcasting
        return getName()!=null ? getName().equals(stud.getName()) : stud.getName()==null; 
    }
    @Override
    public int hashCode(){
        return getName()!=null ? getName().hashCode() : 0;
    }    
}
class Object7{
    public static void main(String args[]){
        Student s1 = new Student("Andrew");
        System.out.println("name : "+s1.name);
        System.out.println("hashCode : "+s1.hashCode());

        Student s2 = new Student("Andrew");
        System.out.println("\nname : "+s2.name);
        System.out.println("hashCode : "+s2.hashCode());
        System.out.println("check : "+s1.equals(s2));
    }
}