## Quick Setup
1. Open terminal or commandline then go to backend folder.
    ```bash
    cd backend/
    ```

2. Download & install the laravel dependencies.

   ```bash
   # Download and install the laravel dependencies
   composer install
   ```

3. Open terminal or commandline then go to frontend folder.
    ```bash
    cd frontend/
    ```

4. Download & install the reactjs dependencies.
   ```bash
   # Download and install the reactjs dependencies
   npm install
   ```
5. Run and build the backend server using docker and sail.
   ```bash
   # Run and build the container using sail
   ./vendor/bin/sail up --build
   ```

6. Run and build the frontend server using docker.
   ```bash
   # Download and install the reactjs dependencies
   docker-compose up --build
   ```
7. Browse the application thru http://localhost:3000.

8. Done!

## Useful Set Of Commands:
```bash
# Start the backend server
./vendor/bin/sail up -d

# Start the frontend server
docker-compose up --build

# Stop current running containers
docker-compose down

```

## Screenshots
**Screenshot #1**
![image alt](https://github.com/jeffmlazo/jan-ken-pon/blob/2a2b410c0e820eb9e1429ce120d7c82698c160fb/screenshot1.jpg)

**Screenshot #2**
![image alt](https://github.com/jeffmlazo/jan-ken-pon/blob/2a2b410c0e820eb9e1429ce120d7c82698c160fb/screenshot2.jpg)

### :wrench: Installed Dependencies
- **Axios**
- **Laravel Sail**
  
