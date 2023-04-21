// program showing the concept of hashCode() and equals()

class Student{
    String name;
    int rno;
    Student stud;
    boolean status;
    Student(int rno,String name){
        this.rno=rno;
        this.name=name;
    }
    public String getName(){
        return name;
    }
    public int getRno(){
        return rno;
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

        stud = (Student)o; // downcasting
        status = getRno()==stud.getRno() ? getName().equals(stud.getName()) : false;
        return status; 
    }
    @Override
    public int hashCode(){
       int res = status ? getName()!=null ? getName().hashCode() : super.hashCode() : super.hashCode();
       return res;
    }    
}
class Object8{
    public static void main(String args[]){
        Student s1 = new Student(101,"Andrew");
        Student s2 = new Student(101,"Andrew");
        System.out.println("check : "+s1.equals(s2));

        System.out.println("name : "+s1.name+"\tRoll Number : "+s1.rno);
        System.out.println("hashCode : "+s1.hashCode());

       System.out.println("check : "+s2.equals(s1));

        System.out.println("\nname : "+s2.name+"\tRoll Number : "+s2.rno);
        System.out.println("hashCode : "+s2.hashCode());
    }
}

/*
    Student s1 = new Student();
    Student s2 = new Student();
    
    s1 and s2 <--------- different object references
    s1 hashCode : 12345     <----
    s2 hashCode : 12346     <----

    Student s1 = new Student("andrew");
    Student s2 = new Student("anderson");
    
    s1 and s2 <--------- different object references
    s1 hashCode : 12345  <-----
    s2 hashCode : 12346  <----- 

    andrew   (string)  23456
    anderson (string)  23457 

    Student s1 = new Student("andrew");
    Student s2 = new Student("andrew");
    
    s1 and s2 <--------- different object references
    s1 hashCode : 12345  
    s2 hashCode : 12346 

    andrew   (string)  23456 <-----
    andrew   (string)  23456 <-----

*/













