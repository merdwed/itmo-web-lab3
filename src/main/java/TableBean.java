
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ManagedProperty;
import javax.faces.event.ActionEvent;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;

@ManagedBean(name = "tableBean", eager = true)
@SessionScoped
public class TableBean implements Serializable{
    
    private static final long serialVersionUID = 1L;

    public TableBean() {
        System.out.println("TableBean instantiated");

    }
    private final LinkedList<Coord> coords
      = new LinkedList<Coord>();	
   public LinkedList<Coord> getCoords() {
    return coords;
 }

 private EntityManagerFactory emf = Persistence.createEntityManagerFactory("lab3");
 private EntityManager em=emf.createEntityManager();
 private void save(Coord coord) {
     /*if (coord.getId() == null) {
         em.persist(coord);
     } else {
         em.merge(coord);
     }*/
     em.getTransaction().begin();
     em.persist(coord);
     em.getTransaction().commit();
     System.out.println("Contact saved with id: " + coord.getId());
 }
 public void addCoord(String x,String y,String r,String s) {
    if(x==null || y==null || r==null || s==null ||
      x.isEmpty() || y.isEmpty() || r.isEmpty() || s.isEmpty()
    )return;
FacesContext fCtx = FacesContext.getCurrentInstance();
   HttpSession session = (HttpSession) fCtx.getExternalContext().getSession(true);
   System.out.print("session id:");	 
   System.out.println(session.getId());	 
    Coord coord = new Coord(x,y,r,s);
    save(coord);
    coords.addFirst(coord);
    return;
 }

 public String deleteCoord(Coord coord) {
    coords.remove(coord);		
    return null;
 }
}