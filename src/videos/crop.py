import cv2

def crop_video(input_file, output_file):
    # Open the video file
    video = cv2.VideoCapture(input_file)

    # Check if the video capture was successful
    if not video.isOpened():
        print("Failed to open the video file.")
        return

    # Read the first frame to get the video dimensions
    ret, frame = video.read()

    # Check if a frame was successfully read
    if not ret:
        print("Failed to read the first frame.")
        video.release()
        return

    height, width, _ = frame.shape

    # Calculate the target height for the 4:5 aspect ratio
    target_height = int((4 / 5) * width)

    # Calculate the y-coordinate for cropping the video
    y = int((height - target_height) / 2)

    # Create a VideoWriter object to write the cropped video
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    output = cv2.VideoWriter(output_file, fourcc, video.get(cv2.CAP_PROP_FPS), (width, target_height))

    # Start reading and cropping the frames
    while True:
        ret, frame = video.read()
        if not ret:
            break

        # Crop the frame using the calculated y-coordinate and target height
        cropped_frame = frame[y:y + target_height, :]

        # Write the cropped frame to the output video
        output.write(cropped_frame)

    # Release the video capture and writer objects
    video.release()
    output.release()

    print("Cropping complete.")

# Example usage

input_video = "src/videos/station2_in.mp4"
output_video = "src/videos/Station2_in.mp4"
crop_video(input_video, output_video)