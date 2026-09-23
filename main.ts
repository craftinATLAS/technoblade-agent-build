player.onChat("techno", function () {
        // Equip Pink Wool in slot 1 and Gold Blocks in slot 2
            agent.setItem(PINK_WOOL, 64, 1)
                agent.setItem(GOLD_BLOCK, 64, 2)
                    
                        // Build 3x3 pink pig head
                            agent.setSlot(1)
                                for (let height = 0; height < 3; height++) {
                                        for (let width = 0; width < 3; width++) {
                                                    agent.place(FORWARD)
                                                                agent.move(RIGHT, 1)
                                                                        }
                                                                                agent.move(LEFT, 3)
                                                                                        agent.move(UP, 1)
                                                                                            }
                                                                                            
                                                                                                // Build gold crown on top
                                                                                                    agent.setSlot(2)
                                                                                                        for (let width = 0; width < 3; width++) {
                                                                                                                agent.place(FORWARD)
                                                                                                                        agent.move(RIGHT, 1)
                                                                                                                            }
                                                                                                                            })
                                                                                                                            player.onChat("run", function () {
	
})
