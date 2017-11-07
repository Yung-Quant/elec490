//
//  ViewController.swift
//  ELEC490HapticSimulator
//
//  Created by Shane Kennedy on 2017-11-06.
//  Copyright © 2017 Shane Kennedy. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }

    @IBAction func getStarted(_ sender: Any) {
        let task = Process()
        task.launchPath = "/Users/shaneikennedy/Documents/Queens/4thYear/elec490/bin/mac-x86_64/21-object"
        //task.launch()
        
    }
    
}

