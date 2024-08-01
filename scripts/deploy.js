async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Check if we have the deployer's account
    if (!deployer) {
      console.error("No deployer account found.");
      return;
    }
  
    // Get the contract factory and deploy the contract
    const NftCount = await ethers.getContractFactory("NftCount");
    console.log("Got contract factory for NftCount.");
  
    const nftCount = await NftCount.deploy();
    console.log("Deploying NftCount...");
  
    // Wait for the deployment to be mined
    await nftCount.deployed();
    console.log("NftCount deployed to:", nftCount.address);
  }
  
  // Run the main function and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Deployment error:", error);
      process.exit(1);
    });
  