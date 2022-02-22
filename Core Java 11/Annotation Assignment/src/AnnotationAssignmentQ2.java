import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Method;


@Retention(RetentionPolicy.RUNTIME) 
@Target({ElementType.TYPE, ElementType.PARAMETER, ElementType.METHOD})  

@interface Info{
	int AuthorID();
	String Author() default "Mohsin";
	String Supervisor() default "Basha";
	String Date();
	String Time();
	int version();
	String description() default "Displaying Method";
}

class Devloper{
	@Info(AuthorID = 1947, Date = "17-11-2000", Time = "11:59pm", version = 7)
	public void displayMethod(){System.out.println("Author Info");} 
}
public class AnnotationAssignmentQ2 {
	public static void main(String[] args)throws Exception{ 
		Devloper devloper = new Devloper();
		Method m=devloper.getClass().getMethod("displayMethod");
		
		Info d1 = m.getAnnotation(Info.class);
		System.out.println("Author ID is: "+d1.AuthorID());
		System.out.println("Author Name is: "+d1.Author());  
		System.out.println("Supervisor is: "+d1.Supervisor());  
	}

}