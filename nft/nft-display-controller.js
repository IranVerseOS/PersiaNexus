class NFTDisplayController {


    constructor(){

        this.dataConnector = null;

        this.renderer = null;

    }



    initialize(dataConnector, renderer){

        this.dataConnector = dataConnector;

        this.renderer = renderer;

    }



    async display(container){

        const nfts =
        await this.dataConnector.getNFTData();


        this.renderer.container =
        container;


        this.renderer.render(nfts);

    }

}



window.NFTDisplayController =
NFTDisplayController;
