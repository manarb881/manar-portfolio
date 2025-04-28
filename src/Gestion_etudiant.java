import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

public class Gestion_etudiant {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Gestion des Étudiants");
        frame.setBounds(350, 100, 550, 600);
        frame.setResizable(false);

        JPanel panel = new JPanel();
        panel.setLayout(null); // No layout manager
        frame.add(panel);

        JLabel ajouter_etudiant = new JLabel("Ajouter Étudiant");
        ajouter_etudiant.setFont(new Font("Arial", Font.BOLD, 20));
        ajouter_etudiant.setBounds(180, 20, 170, 20);
        panel.add(ajouter_etudiant);

        JLabel matricule = new JLabel("Le matricule:");
        matricule.setFont(new Font("Arial", Font.BOLD, 14));
        matricule.setBounds(50, 70, 100, 20);
        panel.add(matricule);

        JLabel nom = new JLabel("Le nom:");
        nom.setFont(new Font("Arial", Font.BOLD, 14));
        nom.setBounds(50, 130, 100, 20);
        panel.add(nom);

        JLabel prenom = new JLabel("Le prénom:");
        prenom.setFont(new Font("Arial", Font.BOLD, 14));
        prenom.setBounds(50, 100, 100, 20);
        panel.add(prenom);

        JLabel date_naiss = new JLabel("Date de Naissance:");
        date_naiss.setFont(new Font("Arial", Font.BOLD, 14));
        date_naiss.setBounds(50, 160, 120, 20);
        panel.add(date_naiss);

        JLabel specialite = new JLabel("Spécialité:");
        specialite.setFont(new Font("Arial", Font.BOLD, 14));
        specialite.setBounds(50, 190, 100, 20);
        panel.add(specialite);

        JTextField matricule_zone = new JTextField();
        matricule_zone.setBounds(180, 70, 200, 25);
        panel.add(matricule_zone);

        JTextField prenom_zone = new JTextField();
        prenom_zone.setBounds(180, 100, 200, 25);
        panel.add(prenom_zone);

        JTextField nom_zone = new JTextField();
        nom_zone.setBounds(180, 130, 200, 25);
        panel.add(nom_zone);

        JTextField date_naiss_zone = new JTextField();
        date_naiss_zone.setBounds(180, 160, 200, 25);
        panel.add(date_naiss_zone);

        JComboBox<String> specialite_zone = new JComboBox<>(new String[]{"DSIA", "MI"});
        specialite_zone.setBounds(180, 190, 200, 25);
        panel.add(specialite_zone);

        // Table setup
        String[] columns = {"Matricule", "Prénom", "Nom", "Date de Naissance", "Spécialité"};
        DefaultTableModel modele = new DefaultTableModel(columns, 0);
        JTable tableau = new JTable(modele);
        JScrollPane scrol = new JScrollPane(tableau);
        scrol.setBounds(20, 250, 500, 250);
        panel.add(scrol);

        // Add student button
        JButton Ajouter_Etudiant = new JButton("Ajouter Étudiant");
        Ajouter_Etudiant.setBackground(Color.GREEN);
        Ajouter_Etudiant.setBounds(390, 190, 130, 25);
        panel.add(Ajouter_Etudiant);

        Ajouter_Etudiant.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String matricule_text = matricule_zone.getText();
                String prenom_text = prenom_zone.getText();
                String nom_text = nom_zone.getText();
                String naissance_text = date_naiss_zone.getText();
                String specialite_text = specialite_zone.getSelectedItem().toString();
                modele.addRow(new Object[]{matricule_text, prenom_text, nom_text, naissance_text, specialite_text});
            }
        });

        // Delete student button
        JButton Supprimer_Etudiant = new JButton("Supprimer Étudiant");
        Supprimer_Etudiant.setBounds(200, 520, 150, 25);
        Supprimer_Etudiant.setBackground(Color.RED);
        panel.add(Supprimer_Etudiant);

        Supprimer_Etudiant.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int nombre = tableau.getSelectedRowCount();
                if (nombre == 1) {
                    modele.removeRow(tableau.getSelectedRow());
                } else {
                    JOptionPane.showMessageDialog(frame, "Tu dois sélectionner un seul étudiant à la fois");
                }
            }
        });
        

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
