package application;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.BorderPane;

public class MainController {
	
	public ObservableList<String> options = 
		    FXCollections.observableArrayList(
		        "Breast Palpation"
		    );
	public String operationChoice;
	
    @FXML
    private ComboBox<String> simMenu;
    private BorderPane mainWindow;

    @FXML
    void training(MouseEvent event) {
    		mainWindow.setVisible(false);
    }
    
    @FXML
    public void initialize() {
    		simMenu.setItems(options);
    }

}