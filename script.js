@RestController
@RequestMapping("/api/exams")
public class ExamController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/{examId}/questions")
    public ResponseEntity<List<Question>> startExam(@PathVariable Long examId) {
        List<Question> questions = questionRepository.findByExamId(examId);
        // Shuffle questions to prevent cheating if required
        Collections.shuffle(questions);
        return ResponseEntity.ok(questions);
    }
}
