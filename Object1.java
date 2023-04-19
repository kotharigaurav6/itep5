Object class is the parent class in java
java.lang package is the default package in java
import java.lang.Object;
import java.lang.String;
import java.lang.System;

----------------------------------------
class Hello extends Object{   <----------directly extends Object class
    public static void main(java.lang.String args[]){

    }
}
----------------------------------------

class Object{

}
class Parent extends Object{ <------------ directly extends Object class

}
class Child extends Parent{ <--------- indirectly extends Object class

}
-----------------------------------------

Methods : 
1) toString()
2) hashCode()
3) getClass()
4) equals()
5) clone()
6) finalize()
7) wait()
   |-- wait(argument);
   |-- wait(1_argument, 2_argument);
8) notify()
9) notifyAll()


1) toString()
-------------
class Object{

public String toString(){
                    Demo         @           67ab54
    return getClass().getName()+"@"+Integer.toHexString(hashCode());
}
    |           |
    |           |
}


class Demo
 |-- Demo obj = new Demo();
      |-- System.out.println(obj);
      |-- System.out.println(obj.toString());
            |-- output : Demo@67ab54 <-- default string representation of Object
                          |-- arises with toString() method of Object class


