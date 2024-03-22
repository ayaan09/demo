from moviepy.editor import VideoFileClip

def convert_avi_to_mp4(input_file, output_file):
    clip = VideoFileClip(input_file)
    clip.write_videofile(output_file, codec='libx264')

input_file_path = 'src/videos/station2_out.avi'
output_file_path = 'src/videos/station2_out.mp4'

convert_avi_to_mp4(input_file_path, output_file_path)